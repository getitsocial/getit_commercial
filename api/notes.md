# json-generator.com

## orders

[
  '{{repeat(5, 20)}}',
  {
    id: '{{objectId()}}',
    user: {
      name: '{{firstName()}} {{surname()}}',
      gender: '{{gender()}}',
      company: '{{company().toUpperCase()}}',
      email: '{{email()}}',
      phone: '+1 {{phone()}}',
      address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
        picture: 'http://placehold.it/32x32',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}'
    },
    createdAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    items: {
      amount: '{{integer(10, 500)}}',
      totalPrice: "{{integer(50, 150)}}, {{integer(10, 99)}}"
    },
    status: '{{random(["pending"], ["done"], ["shipped"], ["canceled"])}}'
  }
]