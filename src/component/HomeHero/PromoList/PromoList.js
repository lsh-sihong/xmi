import React, { Component } from 'react'

export default class PromoList extends Component {
    render() {
        const {promolist}=this.props
        
        return (
            <div className='promo span16'>
                <ul className='promo-list clearFix'>
                    {
                        promolist.map(promo=>{
                            return (
                                <li className='f_left' key={promo.text}>
                                    <a href={promo.href}
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        >
                                        <img src={promo.pic} 
                                            alt={promo.text}
                                        />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
