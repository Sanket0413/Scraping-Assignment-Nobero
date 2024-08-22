import scrapy

class GridSpider(scrapy.Spider):
    name = 'grid_spider'
    start_urls = ['https://nobero.com/pages/men']

    def parse(self, response):
        # Extract the div with class "custom-page-season-grid-item"
        grid_items = response.css('div.custom-page-season-grid-item')
        
        for item in grid_items:
            # Extract data
            link = item.css('a::attr(href)').get()
            image_url = item.css('img::attr(src)').get()
            # Clean image URL
            image_url = response.urljoin(image_url)

            yield {
                'link': response.urljoin(link),
                'image_url': image_url,
            }


class ProductDetailsSpider(scrapy.Spider):
    name = 'product_details_spider'
    start_urls = [
        'https://nobero.com/products/lunar-echo-oversized-t-shirt-1?variant=45663963218086'
    ]

    def parse(self, response):
        # Extract the product title
        product_title = response.css('h1.product-title::text').get()
        if product_title:
            product_title = product_title.strip()
        else:
            self.logger.error('Product title not found')
            product_title = 'Not found'

        # Extract the current price
        current_price = response.css('h2#variant-price::text').get()
        if current_price:
            current_price = current_price.strip()
        else:
            self.logger.error('Current price not found')
            current_price = 'Not found'

        # Extract the MRP (strike-through price)
        mrp = response.css('span#variant-compare-at-price::text').get()
        if mrp:
            mrp = mrp.strip()
        else:
            self.logger.error('MRP not found')
            mrp = 'Not found'

        # Extract the number of people who bought the product in the last 7 days
        bought_count = response.css('span.product_bought_count::text').get()
        if bought_count:
            bought_count = bought_count.strip()
        else:
            self.logger.error('Bought count not found')
            bought_count = 'Not found'

        # Extract the selected color
        selected_color = response.css('span#selected-color-title::text').get()
        if selected_color:
            selected_color = selected_color.strip()
        else:
            self.logger.error('Selected color not found')
            selected_color = 'Not found'

        # Extract the available sizes
        sizes = response.css('label.size-select::text').getall()
        sizes = [size.strip() for size in sizes]
        if not sizes:
            self.logger.error('Sizes not found')
            sizes = ['Not found']

        yield {
            'product_title': product_title,
            'current_price': current_price,
            'mrp': mrp,
            'bought_count': bought_count,
            'selected_color': selected_color,
            'sizes': sizes,
        }
