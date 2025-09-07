# Search for variants across the entire site (excluding vendor)
echo "=== INSTALLER SECTION ===" grep -r -i "lorawan" docs/2/installer/ --include="*.md" | grep -v "LoRaWAN" echo "=== GENERAL SECTION ===" grep -r -i "lorawan" 
docs/2/general/ --include="*.md" | grep -v "LoRaWAN" echo "=== ADMIN SECTION ===" grep -r -i "lorawan" docs/2/admin/ --include="*.md" | grep -v "LoRaWAN"
# Get counts by section
echo "=== COUNTS BY SECTION ===" echo "Installer:" $(grep -r -o -i "lorawan[a-z]*" docs/2/installer/ --include="*.md" | wc -l) echo "General:" $(grep -r -o -i 
"lorawan[a-z]*" docs/2/general/ --include="*.md" | wc -l)
echo "Admin:" $(grep -r -o -i "lorawan[a-z]*" docs/2/admin/ --include="*.md" | wc -l)
