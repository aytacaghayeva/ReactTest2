import React, { Component } from "react";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import Wine from "./Wine";
import Wine1 from "./wine1.webp";
import Wine2 from "./wine2.webp";
import Wine3 from "./wine3.webp";


class Home extends Component {
    // state = {
    //     wineName: "",
    //     winesArray: [
    //         {
    //             id: 0,
    //             photo: Wine1,
    //             name: "Ivanovka",
    //             desc: "wirin",
    //             price: 15,
    //         },
    //         {
    //             id: 0,
    //             photo: Wine2,
    //             name: "Yeddi gozel",
    //             desc: "kemwirin",
    //             price: 12,
    //         },
    //         {
    //             id: 0,
    //             photo: Wine3,
    //             name: "Savalan",
    //             desc: "turw",
    //         }
    //     ],
    //     fromValue: "",
    //     toValue: "",
    //     amountValue: null
    // };
    // handleChange = (event) => {
    //     this.setState({
    //         wineName: event.target.value
    //     })
    // }

    // componentDidMount() {
    //     this.showMessage();
    // }

    // showMessage = () => {
    //     fetch("https://acb-api.algoritmika.org/api/transaction")
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({ 
    //                 fromValue: data[0].from,
    //                 toValue: data[0].amount ,
    //                 amountValue: data[0].amount
    //              });
    //                     })
    //         .catch(err => console.error(err));
    // }


    // render() {
    //     let { winesArray, wineName,fromValue,toValue,amountValue } = this.state;
    //     return (
    //         <div className="home">
    //             <Header />
    //             <div className="inputWine">
    //                 <input className="wine-input" placeholder="Name" onChange={this.handleChange} />
    //             </div>

    //             <div className="home-wine">
    //                 {
    //                     winesArray.filter(element => element.name.toLowerCase().includes(wineName.toLowerCase())).map((item, index) => {
    //                         return (
    //                             <Wine 
    //                                 key={item.id}
    //                                 photo={item.photo}
    //                                 name={item.name}
    //                                 desc={item.desc}
    //                                 price={item.price}
    //                             />
    //                         );
    //                     })
    //                 }
    //             </div>
    //             <p>Debt is given From: {fromValue} To: {toValue} Amount: {amountValue} $ </p>
    //             <Footer />
    //         </div>
    //     )
    // }
    state = {
        wineName: "",
        winesArray: [
            {
                id: 0,
                photo: Wine1,
                name: "Ivanovka",
                desc: "wirin",
                price: 15,
            },
            {
                id: 1,
                photo: Wine2,
                name: "Yeddi gozel",
                desc: "kemwirin",
                price: 12,
            },
            {
                id: 2,
                photo: Wine3,
                name: "Savalan",
                desc: "turw",
            }
        ],
        pressButtonKey: "",
    };
    handleChange = (event) => {
        this.setState({
            wineName: event.target.value
        })
    }

    componentDidMount() {
        window.addEventListener("keypress", this.showKeyboardPress)
    }

    showKeyboardPress = (event) => {
        this.setState({
            pressButtonKey: event.key
        })
    }
    componentWillUnmount() {
        window.removeEventListener("keypress", this.showKeyboardPress);
    }

    clickCloseButton = (id) => {
        let copyWinesArray = [...this.state.winesArray];
        let result = copyWinesArray.filter((item, index) => {
            return item.id !== id;
        })
        this.setState({winesArray: result })
    }
    clickAddCard = () =>{
        let copy = this.state.winesArray;
        let newCardArray = [
            ...copy.slice(0,1), 
            {
                id: Math.max(...copy.map(el=> el.id)) + 1,
                photo: Wine1 ,
                name: "Ivanovka Pro" ,
                desc: "dadsiz" ,
                price: 20 ,
            },
            ...copy.slice(1)
        ]
        this.setState({winesArray: newCardArray })

    }
    render() {
        let { winesArray, wineName, pressButtonKey } = this.state;
        return (
            <div className="home">
                <Header />
                <div className="inputWine">
                    <input className="wine-input" placeholder="Name" onChange={this.handleChange} />
                </div>

                <div className="home-wine">
                    {
                        winesArray.filter(element => element.name.toLowerCase().includes(wineName.toLowerCase())).map((item, index) => {
                            return (
                                <Wine
                                    key={item.id}
                                    photo={item.photo}
                                    name={item.name}
                                    desc={item.desc}
                                    price={item.price}
                                    handleClose={() => this.clickCloseButton(item.id)}
                                />
                            );
                        })
                    }
                </div>
                <button onClick={this.clickAddCard}>Add Ivanovka </button>
                <p style={{ color: pressButtonKey === "1" ? "red" : pressButtonKey === "2" ? "blue" : "black" }} >Clicked keyboard button: {pressButtonKey}</p>
                <Footer />
            </div>
        )
    }
}
export default Home;