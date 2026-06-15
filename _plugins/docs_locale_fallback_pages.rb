module Jekyll
  class PageWithoutAFile < Page
    def read_yaml(*)
      @data ||= {}
    end
  end

  module DocsLocaleFallbackPages
    SUPPORTED = %w[fr de es].freeze
    DOCS_VERSION = '2'
    PREFIX = "docs/#{DOCS_VERSION}/"

    def self.locale_segment?(segment)
      SUPPORTED.include?(segment.to_s)
    end

    def self.english_pages(site)
      site.pages.select do |page|
        next false unless page.path.start_with?(PREFIX)

        segments = page.path.split('/')
        segments.length > 2 && !locale_segment?(segments[2])
      end
    end

    def self.locale_source_exists?(site, locale, relative_path)
      site.pages.any? { |page| page.path == "#{PREFIX}#{locale}/#{relative_path}" }
    end

    Jekyll::Hooks.register :site, :post_read do |site|
      english_pages(site).each do |source|
        relative = source.path.sub(PREFIX, '')
        dir = File.dirname(relative)
        dir = '' if dir == '.'

        SUPPORTED.each do |locale|
          next if locale_source_exists?(site, locale, relative)

          fallback_relative = dir.empty? ? "#{locale}/#{File.basename(relative)}" : "#{locale}/#{relative}"
          fallback_dir = File.dirname("#{PREFIX}#{fallback_relative}")
          fallback_name = File.basename(relative)

          page = PageWithoutAFile.new(site, site.source, fallback_dir, fallback_name)
          page.data = source.data.dup
          page.data['lang'] = locale
          page.data['locale_fallback'] = true
          page.data.delete('translation_of')
          page.content = source.content
          site.pages << page
        end
      end
    end
  end
end
