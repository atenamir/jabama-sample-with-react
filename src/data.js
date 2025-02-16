import home1 from "./assets/images/home1.jpg";
import home2 from "./assets/images/home2.jpg";
import home3 from "./assets/images/home3.jpg";
import home4 from "./assets/images/home4.jpg";
import home5 from "./assets/images/home5.jpg";
import home6 from "./assets/images/home6.jpg";
import home7 from "./assets/images/home7.jpg";
import home8 from "./assets/images/home8.jpg";
import home9 from "./assets/images/home9.jpg";
import home10 from "./assets/images/home10.jpg";

const Data = [
  {
    id: 1,
    type: "ویلا",
    name: "ویلا",
    title:'ویلا  در فیروزکوه',
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    image: home1,
    city: "فیروزکوه",
    address: "تهران ، فیروزکوه",
    room: 2,
    bathRoom: 1,
    rent: 1800000,
    agent: {
      name: "محمد رضایی",
      phone: "0912123456",
    },
  },
  {
    id: 2,
    type: "ویلا",
    name: "ویلا",
    title:'ویلا  مجهز در فیروزکوه',
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    image: home2,
    city: "فیروزکوه",
    address: "تهران ، فیروزکوه",
    room: 4,
    bathRoom: 1,
    rent: 3800000,
    agent: {
      name: "فیروز محبی",
      phone: "0912123456",
    },
  },
  {
    id: 3,
    type: "ویلا",
    name: "ویلا",
    title:'ویلا مجهز در فیروزکوه',
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    image: home4,
    city: "فیروزکوه",
    address: "تهران ، فیروزکوه",
    room: 2,
    bathRoom: 2,
    rent: 2300000,
    agent: {
      name: "امیر محمدی",
      phone: "0912123456",
    },
  },
  {
    id: 4,
    type: "اپارتمان",
    name: "اپارتمان",
    title:'آپارتمان در درماوند',
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    image: home4,
    city: "دماوند",
    address: "تهران ، دماوند",
    room: 2,
    bathRoom: 1,
    rent: 5500000,
    agent: {
      name: "محمد رضایی",
      phone: "0912123456",
    },
  },
  {
    id: 5,
    type: "اپارتمان",
    name: "اپارتمان",
    title:'آپارتمان مجهز در سرسبز',
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    image: home5,
    city: "تهران",
    address: "تهران ، سرسبز",
    room: 1,
    bathRoom: 1,
    rent: 1700000,
    agent: {
      name: "محمد رضایی",
      phone: "0912123456",
    },
  },
  {
    id: 6,
    type: "اپارتمان",
    name: "اپارتمان",
    title:'آپارتمان اجاره ای در معلم',
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    image: home6,
    city: "دماوند",
    address: "تهران ، معلم",
    room: 2,
    bathRoom: 1,
    rent: 1800000,
    agent: {
      name: "محمد رضایی",
      phone: "0912123456",
    },
  },
  {
    id: 7,
    type: "اپارتمان",
    name: "اپارتمان",
    title:' آپارتمان 70 متری محمدیه',
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    image: home7,
    city: "تهران",
    address: "تهران ، محمدیه",
    room: 2,
    bathRoom: 1,
    rent: 900000,
    agent: {
      name: "محمد رضایی",
      phone: "0912123456",
    },
  },
  {
    id: 8,
    type: "خانه قدیمی",
    name: "اپارتمان",
    title:' آپارتمان 70 متری امانیه',
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    image: home8,
    city: "تهران",
    address: "تهران ، امانیه",
    room: 4,
    bathRoom: 1,
    rent: 6800000,
    agent: {
      name: "محمد رضایی",
      phone: "0912123456",
    },
  },
  {
    id: 9,
    type: "خانه قدیمی",
    name: "اپارتمان",
    title:' آپارتمان 98 متری شوش',
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    image: home9,
    city: "تهران",
    address: "تهران ، شوش",
    room: 4,
    bathRoom: 1,
    rent: 2800000,
    agent: {
      name: "محمد رضایی",
      phone: "0912123456",
    },
  },
  {
    id: 10,
    type: "خانه قدیمی",
    name: "اپارتمان",
    title:' خانه 143 متری',
    decription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    image: home10,
    city: "تهران",
    address: "تهران ، امانیه",
    room: 4,
    bathRoom: 1,
    rent: 6800000,
    agent: {
      name: "محمد رضایی",
      phone: "0912123456",
    },
  },
];

export default Data;
