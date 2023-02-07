import images from './images';

const wines= [
  {
    title: 'Veg Thali',
    price: '₹250',
    tags: '2 Tandoori Roti+Dal Makhani+Kadai Veg+Paneer Tikka Masala+Paneer Tikka+Biryani Rice+Sweet ',
  },
  {
    title: 'Chicken Tikka',
    price: '₹60',
    tags: 'CA| Bottle',
  },
  {
    title: 'Vegetable Briyani',
    price: '₹150',
    tags: 'Adittion: Raita ',
  },
  {
    title: 'Veg Fried rice',
    price: '₹190',
    tags: 'Adittion: Raita ',
  },
  {
    title: 'Mexican Shawarma Roll',
    price: '$₹118',
    tags: 'Addition: Chicken pieces With Mayo',
  },
  {
    title: 'Shawarma Roll',
    price: '$90',
    tags: 'Addition:Vegetables With Mayo',
  },
];

const cocktails = [
  {
    title: 'Chicken Briyani',
    price: '₹250',
    tags: 'Adition: Raita ',
  },
  {
    title: 'Mutton Briyani',
    price: '₹300',
    tags: 'Adition: Raita ',
  },
  {
    title: 'Mutton Briyani',
    price: '₹300',
    tags: 'Adition: Raita ',
  },
  {
    title: 'Ghee Dosa',
    price: '₹145',
    tags: 'Adition: Coconut chutney| Sambar',
  },
  {
    title: 'Naan',
    price: '₹45',
    tags: 'Addition: Any Kurma on the Menu can be ordered',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Restaurant of the year',
    subtitle: 'Year: 2020-21',
  },
  {
    imgUrl: images.award01,
    title: 'Best Casual Dining Chain',
    subtitle: 'Year:2019',
  },
 
  {
    imgUrl: images.award03,
    title: 'Most Creative Dining Concept',
    subtitle: 'Year:2020-22',
   
  },
];

export default { wines, cocktails, awards };
