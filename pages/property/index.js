import {Container, Input} from "@mantine/core";
import img from '../../assets/5.png'
import {useState} from "react";

function Property() {
    const prop = [
        {
            id: "MyProperty #1",
            current_holder: "0xbb59805EEe63041B330e56904278A0f27c8561e6",
            location: "FGH",
            colony: "X",
            house_number: 1,
            square_feet: 3480,
            direction: "Facing North",
            floors: 2,
            legal_issues: "No"
        }
    ]

    const keys = Object.keys(prop[0])
    const [search, setSearch] = useState(null)
    return (<Container size="lg" className="py-12 ">
        <h1 className="uppercase text-black font-bold">Property Information</h1>
        <div>
            <Input variant="default" onChange={(e) => e.target.value === '' ? setSearch(null) : setSearch(e.target.value)}/>
        </div>
        {
            prop[0].id.toLowerCase().includes(search?.toLowerCase()) ? <>
                <div className="pt-10 flex justify-around
        ">
                    <div>
                        <img className="shadow rounded" src={img.src} width="100%" alt=""/>
                        {/*{'name'}*/}
                        {/*    <Button className="bg-blue-500 rounded-full mt-10 inline-block">Buy</Button>*/}
                    </div>
                    <div className="w-full px-10">
                        <h2 className="text-lg">Property information</h2>
                        <div>
                            {keys.map(x=>{
                                return<div key={x.id} className="flex space-x-2">
                                <div className="tracking-wide">{x}</div> : <span>{prop[0][x]}</span>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </> : <></>
        }
    </Container>)
}

export default Property