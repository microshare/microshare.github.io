module Jekyll
  module DocsEnglishPrefixPages
    DOCS_VERSION = '2'
    PREFIX = "docs/#{DOCS_VERSION}/"
    LOCALE_SEGMENT = 'en'
    LOCALE_SEGMENTS = %w[en fr de es].freeze

    def self.locale_segment?(segment)
      LOCALE_SEGMENTS.include?(segment.to_s)
    end

    def self.english_pages(site)
      site.pages.select do |page|
        next false unless page.path.start_with?(PREFIX)

        segments = page.path.split('/')
        segments.length > 2 && !locale_segment?(segments[2])
      end
    end

    def self.alias_exists?(site, relative)
      site.pages.any? { |page| page.path == "#{PREFIX}#{LOCALE_SEGMENT}/#{relative}" }
    end

    Jekyll::Hooks.register :site, :post_read do |site|
      english_pages(site).each do |source|
        relative = source.path.sub(PREFIX, '')
        next if alias_exists?(site, relative)

        canonical_url = Jekyll::DocsLocaleManifest.normalize_path(source.url)
        fallback_relative = relative
        fallback_dir = File.dirname("#{PREFIX}#{LOCALE_SEGMENT}/#{fallback_relative}")
        fallback_name = File.basename(relative)

        page = PageWithoutAFile.new(site, site.source, fallback_dir, fallback_name)
        page.data = {
          'layout' => 'en_redirect',
          'lang' => 'en',
          'canonical_url' => canonical_url
        }
        page.content = ''
        site.pages << page
      end
    end
  end
end
