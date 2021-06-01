import React,{ useEffect,useState}from 'react';
import './css/style.css';


const Search=()=>{
	const [city,setCity]=useState("null");
	const[search,setSearch]=useState("delhi");
	useEffect(()=>{
const fetchApi =async()=>{
	const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2568e8a21e36a50261f98bef04f53cb3`
	const response=await fetch(url);
	const resJson=await response.json();

	// console.log(resjson);
	setCity(resJson.main);
};
fetchApi();
	},[search])
	
	return(
<>
       <div className="main_div">
       <div className="box">

		<div className="searchbar">
		 <h2>weather temprature</h2>

			<input type="search" value ={search} className="inputFeild"  onChange={(event)=>{ setSearch(event.target.value)
            }} /><br/><br/>
			</div>
			
		     {!city ?(
		     	<p>No Data Found</p>
		     	):(
		     	<div>
		     	<div className="info">
		     <h2 className="location">
		     <i className="fas fa-street-view"></i>{search}</h2>
		     <h1 className="temp">{city.temp}°Cel </h1>
		     <h3 className="tempmin_max">min{city.temp_min}°Cel |max {city.temp_max}°Cel </h3>
		   </div>
		     
			 </div>

		     	)}
		     

</div></div>
</>
		)
}
export default Search; 