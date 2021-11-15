const finalPrice = (price, discount) => {
  if (discount) {
    return (price * (100 - discount)) / 100
  }

  return price
}

const generateProduct = ({ productId } = {}) => {
  productId = productId || parseInt(Math.random() * 1000000)
  const price = (Math.floor(Math.random() * 99) + 5) * 10
  const discount = Math.random() < 0.5 ? Math.floor(Math.random() * 45) + 5 : 0

  return {
    recordSetCount: 1,
    resourceId: `/store/hit/product/${productId}?locale=en_US`,
    resourceName: 'product',
    recordSetTotal: 1,
    version: 1.7,
    products: [
      {
        type: 'Product',
        buyable: true,
        seo: {
          seoURLKeyword: `/balenciaga/leather-pants/black-leather-leggings/${productId}`,
          title: 'Black leather leggings',
          metaDescription:
            'Shop on-sale leather leggings. Browse other discount designer Leather Pants & more luxury fashion',
        },
        designerNameEN: 'Balenciaga',
        name: 'Black leather leggings',
        images: [
          {
            id: 1,
            size: {
              width: 450,
              height: 675,
            },
            url: 'https://via.placeholder.com/450x675',
          },
          {
            id: 2,
            size: {
              width: 300,
              height: 450,
            },
            url: 'https://via.placeholder.com/300x450',
          },
          {
            id: 3,
            size: {
              width: 250,
              height: 375,
            },
            url: 'https://via.placeholder.com/250x375',
          },
        ],
        productId,
        attributes: [
          {
            identifier: 'Price',
            label: 'Price',
            values: [
              {
                label: finalPrice(price, discount),
              },
            ],
          },
          {
            identifier: 'Currency',
            label: 'Currency',
            values: [
              {
                label: '€',
              },
            ],
          },
          ...(discount
            ? [
                {
                  identifier: 'Discount',
                  label: 'Discount',
                  values: [
                    {
                      label: discount,
                    },
                  ],
                },
                {
                  identifier: 'FullPrice',
                  label: 'FullPrice',
                  values: [
                    {
                      label: price,
                    },
                  ],
                },
              ]
            : []),
        ].sort(() => (Math.random() > 0.5 ? 1 : -1)),
        recommendations: new Array(12)
          .fill(0)
          .map(() => parseInt(Math.random() * 1000000))
          .reduce((acc, productId) => {
            acc[productId] = { productId }
            return acc
          }, {}),
      },
    ],
  }
}

export default function handler(req, res) {
  const { id } = req.query || {}

  res.status(200).json(generateProduct({ productId: id }))
}
