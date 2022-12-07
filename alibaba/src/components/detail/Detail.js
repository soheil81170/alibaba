import "primeflex/primeflex.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../home/Title";
import { InputText } from "primereact/inputtext";
import Titles from "./Titles";
import { Button } from 'primereact/button';
import { Link, useParams, useSearchParams } from "react-router-dom";

function Detail(props) {
    let { name } = useParams(); 
    const [listofcu, setListofcu] = useState([]);

    useEffect(() => {
        console.log("2222222222222222");
        countrieshandler();
      }, []);
    
      const countrieshandler = async () => {
        const rescu = await axios.get("https://restcountries.com/v3/all");
        console.log(rescu.data);
        const fil = rescu.data.filter((cu)=>{ return cu?.name?.common == name})[0]
        console.log(
            //  listofcu.filter((cu)=>{ return cu?.name?.common == name})[0].flag ,
            fil);
        setListofcu(fil);
      };
    console.log(
      //  listofcu.filter((cu)=>{ return cu?.name?.common == name})[0].flag ,
      listofcu);
  return (
    <>
    <Titles/>
    <Link to={'/'}>
    <Button label="Back" style={{position: "relative" ,left: "65px" ,top: "45px"}} className="p-button-outlined " />
    </Link><br/><br/><br/><br/> <br/>


        <div class="card ml-7">
        <div class="flex flex-wrap justify-content-start card-container blue-container gap-8">
            <div class="border-round w-30rem h-21rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">
                <img style={{width: "100%", height:"100%"}} src={listofcu?.flags?.[1]}/>
            </div>
            <div class="border-round w-22rem h-19rem text-white font-bold flex align-items-center justify-content-center ">
                <div class="card">
                    <div style={{ marginBottom: '5px'}} class="flex flex-column card-container green-container">
                        <div style={{color: "black",}} class="flex align-items-center w-11rem justify-content-center h-3rem font-bold border-round m-2">
                            <h2>
                            {listofcu?.name?.common}
                            </h2>
                        </div>
                        <div style={{color: "black"}} class="flex align-items-center w-11rem justify-content-center h-3rem font-bold border-round m-0">
                            <h5 style={{float: "left", paddingLeft:"10px", width:"100%"}}>
                            Native Name : {(listofcu?.name?.nativeName?.nor?.common) ? listofcu?.name?.nativeName?.nor?.common : listofcu?.name?.common }
                            </h5>
                        </div>
                        <div style={{color: "black"}} class="flex align-items-center w-11rem justify-content-center h-3rem font-bold border-round m-0">
                            <h5 style={{float: "left", paddingLeft:"10px", width:"100%"}}>
                            Population : {listofcu?.population}
                            </h5>
                        </div>
                        <div style={{color: "black"}} class="flex align-items-center w-11rem justify-content-center h-3rem font-bold border-round m-0">
                            <h5 style={{float: "left", paddingLeft:"10px", width:"100%" ,margin:'0px'}}>
                            Region : {listofcu?.region}
                            </h5>
                        </div>
                        <div style={{color: "black"}} class="flex align-items-center w-11rem justify-content-center h-3rem font-bold border-round m-0">
                            <h5 style={{float: "left", paddingLeft:"10px", width:"100%" ,margin:'0px'}}>
                            Sub Region : {listofcu?.subregion}
                            </h5>
                        </div>
                        <div style={{color: "black"}} class="flex align-items-center w-11rem justify-content-center h-3rem font-bold border-round m-0">
                            <h5 style={{float: "left", paddingLeft:"10px", width:"100%" ,margin:'0px'}}>
                            Capital : {listofcu?.capital?.[0]}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bborder-round w-22rem h-19rem text-white font-bold flex align-items-center justify-content-center">
                    <div class="card">
                            <div style={{ marginBottom: '45px'}} class="flex flex-column card-container green-container">
                                <div style={{color: "black"}} class="flex align-items-center w-11rem justify-content-center h-3rem font-bold border-round m-0">
                                    <h5 style={{float: "left", paddingLeft:"10px", width:"100%"}}>
                                    Top Level Domine : {listofcu?.tld?.[0]}
                                    </h5>
                                </div>
                                <div style={{color: "black"}} class="flex align-items-center w-11rem justify-content-center h-3rem font-bold border-round m-0">
                                    <h5 style={{float: "left", paddingLeft:"10px", width:"100%"}}>
                                    Timezones : {listofcu?.timezones?.[0]}
                                    </h5>
                                </div>
                                <div style={{color: "black"}} class="flex align-items-center w-11rem justify-content-center h-3rem font-bold border-round m-0">
                                    <h5 style={{float: "left", paddingLeft:"10px", width:"100%" ,margin:'0px'}}>
                                    Continents : {listofcu?.continents?.[0]}
                                    </h5>
                                </div>
                            </div>
                        </div>

                </div>
            
            
                <div class="bborder-round w-22rem h-19rem text-white font-bold flex align-items-center justify-content-center">
                    <div class="card">
                            <div style={{ marginBottom: '45px',}} class="flex mr-10 flex-column card-container green-container">
                                <div style={{color: "black"}} class="flex align-items-center w-25rem justify-content-center h-3rem font-bold border-round mr-10">
                                {(listofcu?.borders) ? listofcu?.borders.map((bor)=>{
                                    return(
                                    <Button label={bor} aria-label="Submit"/>
                                    )
                                }) : null}
                                
                                </div>
                            </div>
                        </div>

                </div>
        </div>
        </div>
    </>
  )
}

export default Detail;
