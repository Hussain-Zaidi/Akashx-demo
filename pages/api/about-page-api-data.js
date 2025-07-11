export default function handler(req, res) {
    const data = {
      data: [
        {
          id: 24,
          documentId: "khytbvkfvq3ty21046qejbgh",
          section1_title: "AkashX, elevating cloud standards",
          section1_p1:
            "AkashX is a pioneering data lakehouse company, headquartered in Palo Alto and backed by venture funding. Founded in October 2023, AkashX is revolutionizing analytics on open table formats such as Apache Iceberg with its innovative Empowered Storage (E-S3) technology.",
          section1_p2:
            "This groundbreaking approach redefines the traditional separation between storage and compute by executing partial SQL operations directly within the storage layer. This strategy significantly reduces data movement, bandwidth, and CPU usage, resulting in faster query performance and enhanced efficiency for open formats",
          createdAt: "2024-11-16T06:56:45.490Z",
          updatedAt: "2025-01-14T08:41:19.718Z",
          publishedAt: "2025-01-14T08:41:19.735Z",
          section2_title1: null,
          section2_title2: "<span class='blue-green-background-text'>AkashX's</span> Founders",
          co_founder1_name: "Darshan Nagaraj",
          co_founder1_description:
            "Based in Berlin, Germany, Darshan is a skilled professional in data analytics and engineering. He has held leadership roles at AVIV Group, Y42, and Berlin Brands Group. With a Bachelor of Engineering in Computer Science from Bangalore University, Darshan is dedicated to leveraging data to drive business intelligence and innovation.",
          co_founder2_name: "Kartik Kulkarni",
          co_founder2_description:
            "A technologist with a deep focus on database and distributed systems, Kartik led a team responsible for the core Transactions Engine of the Oracle Database. He holds an MS in Computer Engineering from Carnegie Mellon University and has several patents to his name. Kartik is also committed to social impact through his leadership roles in IEEE.",
          co_founder3_name: "Kris Inapurapu",
          co_founder3_description:
            "A seasoned leader in the Enterprise Software industry, Kris has over 18 years of experience. Currently serving as the Chief Business Officer at MinIO, Kris is responsible for driving business growth strategy and execution. His expertise spans operations, business development, sales, marketing, and corporate strategy.",
          section3_title1: null,
          section3_title2: "Technical Advisors",
          luminary1_title: "David DeWitt",
          luminary1_description: "A database pioneer, David brings invaluable expertise to the team.",
          luminary2_title: "Sam Madden",
          luminary2_description: "Another key advisor contributing to the company's innovative solutions.",
          section_founding_engineers_title1: null,
          section_founding_engineers_title2: "Founding Engineers",
          section_Investors_title1: null,
          section_Investors_title2: "Investors",
          co_founder1_userTitle: "Co-Founder & CPO",
          co_founder1_userLink: "https://www.linkedin.com/in/darshan33/",
          co_founder2_userTitle: "Co-Founder & CEO",
          co_founder2_userLink: "https://www.linkedin.com/in/kulkarnikartik/",
          co_founder3_userTitle: "Co-Founder & COO",
          co_founder3_userLink: "https://www.linkedin.com/in/krisinapurapu/",
          board_member_section_title1: null,
          board_member_section_title2: "Board Member",
          board_member_name: "Raju Reddy",
          board_member_group: "Silicon Valley Quad",
          board_member_description:
            "Raju Reddy is the founder and former CEO of Sierra Atlantic, a company that grew to be a best-in-class global services company over a period of 17 years before being acquired by Hitachi. Previously, Raju spent 10 years at Intel. He enjoys working with young entrepreneurs and mentoring to build great global companies.",
          luminary1_link: "https://www.linkedin.com/in/david-dewitt-30189b50/",
          luminary2_link: "/",
          robust_group_title1: "AkashX is supported by",
          robust_group_title2: "Robust group of Investors",
        },
      ],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 1,
          total: 1,
        },
      },
    };
  
    res.status(200).json(data);
  }
  