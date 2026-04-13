# Product Tags Documentation

This documentation explains how to use product tags (Pest and Clean) to categorize pages and release notes items.

## Overview

Product tags allow you to mark pages and release notes items with product badges (Pest or Clean) to help users quickly identify which product a page or feature belongs to.

## Adding Tags to Menu Items

To add a product tag to a page in the sidebar menu, add a `product` field to the page entry in `_data/docs.yml`:

```yaml
- title: Rodent Alert
  url: /docs/2/general/dashboards/rodent-alert
  keywords: ["rodent", "alert", "detection"]
  product: pest  # Add this line
```

Available product values:
- `pest` - Shows a brown "Pest" badge
- `clean` - Shows a blue "Clean" badge

### Example

```yaml
- title: Washroom Traffic
  url: /docs/2/general/dashboards/washroom-traffic
  keywords: ["washroom", "restroom","traffic", "activity"]
  product: clean  # This page belongs to Clean product
```

## Adding Tags to Release Notes

To add product tags to release notes items, use inline tags in your markdown:

- `[pest]` - Shows a "Pest" badge
- `[clean]` - Shows a "Clean" badge

### Example

```markdown
**New Features**

Platform
- Composer Device Cluster now supports expanded DevEUI formatting [pest]
- Updated Pest wizard app facts for the Metrics app [pest]
- Photo and image upload capability for Mobile Apps [clean]
- The Metrics app can now be configured to visualize data from Hagleitner devices [clean]
```

The tags will be automatically converted to badges when the page is rendered.

## Using the Release Notes Layout

To use the release notes layout with badge support, set the layout in your page frontmatter:

```yaml
---
layout: release-notes
title: Release Notes
description: Take a look at our latest updates
---
```

This layout will automatically process `[pest]` and `[clean]` tags and convert them to badges.

## Styling

Product badges are styled with the following CSS classes:
- `.product-badge` - Base badge styling
- `.product-badge-pest` - Brown background for Pest
- `.product-badge-clean` - Blue background for Clean

Badges automatically adjust their size and position based on context (sidebar menu vs. release notes content).

