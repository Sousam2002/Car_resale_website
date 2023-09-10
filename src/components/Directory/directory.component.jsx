// import { isContentEditable } from "@testing-library/user-event/dist/utils";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from './directory.styles';


  const categories = [
    {
      id: 1,
      title: "SUV",
      imageUrl: "https://www.cnet.com/a/img/resize/0fbc6b23ca9c0d23b7012e8065e5b0d9b92c0870/hub/2022/04/19/c934f364-c5b4-41a4-979b-00af31bfb9eb/hyundai-tucson-1080p.jpg?auto=webp&fit=crop&height=528&width=940",
      route: 'shop/suvs',
    },
    {
      id: 2,
      title: "Sedan",
      imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/New_Volkswagen_sedan_for_India.jpg?size=1200:675",
      route: 'shop/sedan',
    },
    {
      id: 3,
      title: "Hatchback",
      imageUrl: "https://www.thedrive.com/uploads/2023/05/02/corollahatch-1-scaled.jpg?auto=webp&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1920",
      route : 'shop/hatchback',
    },
    {
      id: 4,
      title: "Trucks",
      imageUrl: "https://pattersontruckstop.com/wp-content/uploads/sites/60/2022/07/2016-GMC-Sierra-2.jpeg",
      route : 'shop/trucks',
    },
    {
      id: 5,
      title: "Accessories",
      imageUrl: "https://as1.ftcdn.net/v2/jpg/04/47/14/64/1000_F_447146424_LnIjEuxK7ienMpSOc1uuiMf0dFmBX5tb.jpg",
      route : 'shop/accessories',
    },
  ];


const Directory = () => {
return(
  <DirectoryContainer>
  {categories.map((category) => (
    <DirectoryItem key={category.id} category={category} />
  ))}
  </DirectoryContainer>
)
}

export default Directory