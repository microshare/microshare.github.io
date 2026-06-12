module Jekyll
  module DocsLocaleManifest
    def self.normalize_path(url)
      path = url.to_s.sub(%r{/index\.html\z}, '').sub(/\.html\z/, '')
      path = path.sub(%r{/+\z}, '') unless path == '/'
      path
    end

    Jekyll::Hooks.register :site, :post_read do |site|
      paths = site.pages
        .select { |page| page.path.start_with?('docs/2/') }
        .map { |page| normalize_path(page.url) }
        .uniq
        .sort

      site.data['docs_locale_manifest'] = paths
    end
  end
end
