import React, {Component} from "react";
import Header from "./components/Header";
import Consultation from "./components/Consultation";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default class App extends Component {
    render() {
        return (
            <div>
                <section className="container">
                    <Header />
                    <Consultation />  
                    <Main /> 
                </section>
                <Footer />
            </div>
        )
    }
} 