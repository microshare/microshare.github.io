module Jekyll
  module ProductTagsFilter
    def product_tags(content)
      return content if content.nil?
      
      # Replace [pest] with badge HTML
      content = content.gsub(/\[pest\]/i, '<span class="product-badge product-badge-pest">Pest</span>')
      
      # Replace [clean] with badge HTML
      content = content.gsub(/\[clean\]/i, '<span class="product-badge product-badge-clean">Clean</span>')
      
      content
    end
  end
end

Liquid::Template.register_filter(Jekyll::ProductTagsFilter)

