module Jekyll
  module DocsLocaleLinks
    require 'set'

    SUPPORTED = %w[fr de es].freeze
    DOCS_VERSION = '2'

    DOCS_LINK_PATTERN = %r{
      href=(["'])
      (?:
        https?://docs\.microshare\.io
      )?
      (/docs/#{DOCS_VERSION}/)
      (?!(?:en|fr|de|es)/)
      ([^"'#?]*)
      \1
    }x.freeze

    def self.locale_prefix(lang)
      lang == 'en' ? '' : "#{lang}/"
    end

    def self.manifest_paths(site)
      Array(site.data['docs_locale_manifest']).map do |path|
        Jekyll::DocsLocaleManifest.normalize_path(path)
      end.to_set
    end

    def self.localized_path(manifest, lang, suffix)
      candidate = "/docs/#{DOCS_VERSION}/#{locale_prefix(lang)}#{suffix}"
      normalized = Jekyll::DocsLocaleManifest.normalize_path(candidate)
      return candidate if manifest.include?(normalized) || manifest.include?("#{normalized}/")

      nil
    end

    def self.rewrite_links(content, manifest, lang)
      content.gsub(DOCS_LINK_PATTERN) do
        quote = Regexp.last_match(1)
        prefix = Regexp.last_match(3)
        suffix = Regexp.last_match(4)
        localized = localized_path(manifest, lang, suffix)
        target = localized || "#{prefix}#{suffix}"
        "href=#{quote}#{target}#{quote}"
      end
    end

    Jekyll::Hooks.register :pages, :pre_render do |page|
      next unless page.path.start_with?("docs/#{DOCS_VERSION}/")

      lang = page.data['lang'] || 'en'
      next if lang == 'en'

      manifest = manifest_paths(page.site)
      page.content = rewrite_links(page.content, manifest, lang)
    end
  end
end
