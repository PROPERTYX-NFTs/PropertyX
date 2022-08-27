import {Button, Card, Container} from "@mantine/core";
import img1 from '../../assets/cartoon-house.jpg'
import img2 from '../../assets/cartoon.jpg'
import img3 from '../../assets/2.jpg'
import img4 from '../../assets/3.jpg'
import img5 from '../../assets/5.png'

function Marketplace() {
    return (
        <div className="py-10">
            <Container size={"xl"}>
                <div className="text-3xl pb-5 uppercase font-bold">
                    Marketplace
                </div>
                <div className="grid grid-cols-4 gap-3">
                    <Card withBorder>
                        <Card.Section className="h-60  bg-contain bg-center bg-no-repeat"
                                      style={{backgroundImage: `url(${img1.src})`}}>
                            {/*<img src={img1.src} alt=""/>*/}
                        </Card.Section>
                        <Card.Section className="px-3">
                            #67329H1DT372
                        </Card.Section>
                        <Button className="bg-blue-500 rounded-full px-6 py-1 mt-3">Buy</Button>
                    </Card>
                    <Card withBorder>
                        <Card.Section className="h-60  bg-contain bg-center bg-no-repeat"
                                      style={{backgroundImage: `url(${img2.src})`}}>
                            {/*<img src={img1.src} alt=""/>*/}
                        </Card.Section>
                        <Card.Section className="px-3">
                            MyProperty #3988SA8X

                        </Card.Section>
                        <Button className="bg-blue-500 rounded-full px-6  mt-3">Buy</Button>

                    </Card>
                    <Card withBorder>
                        <Card.Section className="h-60  bg-contain bg-center bg-no-repeat"
                                      style={{backgroundImage: `url(${img3.src})`}}>
                            {/*<img src={img1.src} alt=""/>*/}
                        </Card.Section>
                        <Card.Section className="px-3">
                            MyProperty #67329H1DT372
                        </Card.Section>
                        <Button className="bg-blue-500 rounded-full px-6 py-1 mt-3">Buy</Button>

                    </Card>
                    <Card withBorder>
                        <Card.Section className="h-60  bg-contain bg-center bg-no-repeat"
                                      style={{backgroundImage: `url(${img4.src})`}}>
                            {/*<img src={img1.src} alt=""/>*/}
                        </Card.Section>
                        <Card.Section className="px-3">
                            MyProperty #2
                        </Card.Section>
                        <Button className="bg-blue-500 rounded-full px-6 py-1 mt-3">Buy</Button>

                    </Card>
                    <Card withBorder>
                        <Card.Section className="h-60  bg-contain bg-center bg-no-repeat"
                                      style={{backgroundImage: `url(${img5.src})`}}>
                            {/*<img src={img1.src} alt=""/>*/}
                        </Card.Section>
                        <Card.Section className="px-3">
                            MyProperty #1

                        </Card.Section>
                        <Button className="bg-blue-500 rounded-full px-6 py-1">Buy</Button>

                    </Card>
                </div>
            </Container>
        </div>

    )
}

export default Marketplace