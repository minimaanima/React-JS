import React from 'react';

export default class Details extends React.Component {
    render = () => {
        if (this.props.bio) {
            return ( 
                <section id="bio">
                <div className="image">
                    <img src={this.props.url} alt={this.props.name}/>
                </div>
                <div className="info">
                    <p>Name: <strong>{this.props.name}</strong></p>
                    <p>Bio: {this.props.bio}</p>
                    <p></p>
                </div>
            </section>
            )
        } else {
           return (
            <section id="bio">
            <h1 className="noImage">Pls Seelct Image</h1>
            </section>
           )
        }
    }
}