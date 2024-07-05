import { House } from "@/types"
import assert from "assert"

const imageMapper = (type: string, image: string): string => {
  assert(type === "House" || type === "Apartment")

  return type === "House" ? `/houses/${image}.png` : `/apartments/${image}.png`
}

export const housesData: House[] = [
  {
    id: "1",
    type: "House",
    name: "House 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house1",
    imageLg: "house1lg.png",
    country: "United States",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: 6,
    bathrooms: 3,
    surface: "4200 sq ft",
    year: 2016,
    price: 110000,
    agent: {
      image: "agent1",
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: "2",
    type: "House",
    name: "House 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house2",
    imageLg: "house2lg",
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: 6,
    bathrooms: 3,
    surface: "4200 sq ft",
    year: 2016,
    price: 140000,
    agent: {
      image: "agent2",
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: "3",
    type: "House",
    name: "House 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house3",
    imageLg: "house3lg",
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: 6,
    bathrooms: 3,
    surface: "4200 sq ft",
    year: 2016,
    price: 170000,
    agent: {
      image: "agent3",
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: "4",
    type: "House",
    name: "House 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house4",
    imageLg: "house4lg",
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: 6,
    bathrooms: 3,
    surface: "4200 sq ft",
    year: 2016,
    price: 200000,
    agent: {
      image: "agent4",
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: "5",
    type: "House",
    name: "House 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house5",
    imageLg: "house5lg",
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: 5,
    bathrooms: 3,
    surface: "4200 sq ft",
    year: 2015,
    price: 210000,
    agent: {
      image: "agent5",
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: "6",
    type: "House",
    name: "House 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house6",
    imageLg: "house6lg",
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: 6,
    bathrooms: 3,
    surface: "6200 sq ft",
    year: 2014,
    price: 220000,
    agent: {
      image: "agent6",
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
  {
    id: "7",
    type: "Apartment",
    name: "Apartment 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "apartment1",
    imageLg: "apartment1lg",
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: 2,
    bathrooms: 1,
    surface: "1200 sq ft",
    year: 2012,
    price: 20000,
    agent: {
      image: "agent7",
      name: "Jawhar Shamil Naser",
      phone: "0123 456 78910",
    },
  },
  {
    id: "8",
    type: "Apartment",
    name: "Apartment 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "apartment2",
    imageLg: "apartment2lg",
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: 3,
    bathrooms: 1,
    surface: "1000 sq ft",
    year: 2011,
    price: 30000,
    agent: {
      image: "agent8",
      name: "Juana Douglass",
      phone: "0123 456 78910",
    },
  },
  {
    id: "9",
    type: "Apartment",
    name: "Apartment 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "apartment3",
    imageLg: "apartment3lg",
    country: "United States",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: 2,
    bathrooms: 1,
    surface: "1100 sq ft",
    year: 2011,
    price: 40000,
    agent: {
      image: "agent9",
      name: "Jerry Schenck",
      phone: "0123 456 78910",
    },
  },
  {
    id: "10",
    type: "House",
    name: "House 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house7",
    imageLg: "house7lg",
    country: "Canada",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: 5,
    bathrooms: 3,
    surface: "3200 sq ft",
    year: 2015,
    price: 117000,
    agent: {
      image: "agent10",
      name: "Vera Levesque",
      phone: "0123 456 78910",
    },
  },
  {
    id: "11",
    type: "House",
    name: "House 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house8",
    imageLg: "house8lg",
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: 7,
    bathrooms: 2,
    surface: "2200 sq ft",
    year: 2019,
    price: 145000,
    agent: {
      image: "agent11",
      name: "Sofia Gomes",
      phone: "0123 456 78910",
    },
  },
  {
    id: "12",
    type: "House",
    name: "House 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house9",
    imageLg: "house9lg",
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: 4,
    bathrooms: 4,
    surface: "4600 sq ft",
    year: 2015,
    price: 139000,
    agent: {
      image: "agent12",
      name: "Raymond Hood",
      phone: "0123 456 78910",
    },
  },
  {
    id: "13",
    type: "House",
    name: "House 10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house10",
    imageLg: "house10lg",
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: 5,
    bathrooms: 2,
    surface: "5200 sq ft",
    year: 2014,
    price: 180000,
    agent: {
      image: "agent1",
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: "14",
    type: "House",
    name: "House 11",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house11",
    imageLg: "house11lg",
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: 5,
    bathrooms: 2,
    surface: "3200 sq ft",
    year: 2011,
    price: 213000,
    agent: {
      image: "agent2",
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: "15",
    type: "House",
    name: "House 12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "house12",
    imageLg: "House12lg",
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: 4,
    bathrooms: 3,
    surface: "5200 sq ft",
    year: 2013,
    price: 221000,
    agent: {
      image: "agent3",
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: "16",
    type: "Apartment",
    name: "Apartment 16",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "apartment4",
    imageLg: "apartment4lg",
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: 2,
    bathrooms: 1,
    surface: "1300 sq ft",
    year: 2011,
    price: 21000,
    agent: {
      image: "agent4",
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: "17",
    type: "Apartment",
    name: "Apartment 17",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "apartment5",
    imageLg: "apartment5lg",
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: 3,
    bathrooms: 1,
    surface: "1000 sq ft",
    year: 2012,
    price: 32000,
    agent: {
      image: "agent5",
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: "18",
    type: "Apartment",
    name: "Apartment 18",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "apartment6",
    imageLg: "apartment6lg",
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: 3,
    bathrooms: 1,
    surface: "1200 sq ft",
    year: 2010,
    price: 38000,
    agent: {
      image: "agent6",
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
].map(
  (house) =>
    ({
      ...house,
      image: imageMapper(house.type, house.image),
      imageLg: imageMapper(house.type, house.imageLg),
      agent: { ...house.agent, image: `/agents/${house.agent.image}.png` },
    }) satisfies House as House
)
