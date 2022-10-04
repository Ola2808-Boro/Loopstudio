import axios from "axios";

const getData = async () => {
  const APIKEY = process.env.REACT_APP_DATOCMS_TOKEN;

  const data = axios
    .post(
      "https://graphql.datocms.com/",
      {
        query: `
          {
            allSectionCreations{
              id,
              title,
              description,
              img {
                id,
                url
              }
            }
            allSectionCreationDesktops{
              id,
              title,
              description,
              img{
                id,
                url
              }
            }
            allMenus{
              id,
              menuitem,
            }
            sectionInfo{
              title,
              description,
              img{
                id,
                url,
              }
              imgDesktop{
                 id,
                url,
              }
            }
            header{
              title,
              id,
              imgMobile{
                id,
                url,
              }
              imgDesktop{
                id,
                url,
              }
            }
           socialicon{
            icon{
              id,url
            }
            icon{
              id,url
            }
          }
            footer{
              text
            }
            
            
          }
      `,
      },
      {
        headers: {
          Authorization: `Bearer ${APIKEY}`,
        },
      }
    )
    .then((data) => {
      return data.data;
    });
  // eslint-disable-next-line

  return data;
};

export default getData;
