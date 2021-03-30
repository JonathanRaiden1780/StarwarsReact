import axios from "axios"

const Swapiurl = "https://graphql.org/swapi-graphql";

const GETPERSON =`
query People{
    {
        person(personID: 1){
          name
        }
      }
}
`;
export default GETPERSON;