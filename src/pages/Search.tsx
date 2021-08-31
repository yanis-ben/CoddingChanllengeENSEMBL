import React, { useState } from 'react'


//rafce
const Search = () => {

    const [searchItem, setSearchItem] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        if(searchItem === "movies")
        {
          // getAPI(SEARCH_API + searchItem)    
      
          // dispatch(GetStreaming())
          // history.push("/series");
          
        }
      }

      const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchItem(e.currentTarget.value);
      }
      
    return (
        <form onSubmit={handleSubmit}>
                  {/* <Search> */}
                    <input 
                    type="search" 
                    className="search" 
                    placeholder="Search.."
                    value={searchItem}
                    onChange={handleChange}
                    />
                  {/* </Search> */}
        </form>

    )
}

export default Search
