module Jekyll
  module DocsTranslations
    SUPPORTED = %w[fr de es].freeze
    DOCS_VERSION = '2'

    def self.normalize_path(url)
      path = url.to_s.sub(%r{/index\.html\z}, '').sub(/\.html\z/, '')
      path = path.sub(%r{/+\z}, '') unless path == '/'
      path
    end

    def self.parse_docs_url(url)
      path = normalize_path(url)
      parts = path.split('/').reject(&:empty?)
      docs_index = parts.index('docs')
      return nil unless docs_index && parts[docs_index + 1] == DOCS_VERSION

      rest = parts[(docs_index + 2)..] || []
      lang = 'en'
      if rest.any? && SUPPORTED.include?(rest[0])
        lang = rest.shift
      end

      relative = rest.join('/')
      {
        lang: lang,
        relative: relative,
        url: path.start_with?('/') ? path : "/#{path}"
      }
    end

    def self.build_translation_groups(site)
      groups = Hash.new { |hash, key| hash[key] = {} }

      site.pages.each do |page|
        next unless page.path.start_with?("docs/#{DOCS_VERSION}/")

        parsed = parse_docs_url(page.url)
        next unless parsed

        groups[parsed[:relative]][parsed[:lang]] = parsed[:url]
      end

      groups
    end

    Jekyll::Hooks.register :site, :post_read do |site|
      groups = build_translation_groups(site)
      site.data['docs_translation_groups'] = groups

      site.pages.each do |page|
        next unless page.path.start_with?("docs/#{DOCS_VERSION}/")

        parsed = parse_docs_url(page.url)
        next unless parsed

        group = groups[parsed[:relative]]
        next unless group && group.any?

        existing = page.data['translations']
        page.data['translations'] = existing.is_a?(Hash) ? existing.merge(group) : group
        page.data['lang'] ||= parsed[:lang]
      end
    end
  end
end
