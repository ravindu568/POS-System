import React from "react";

interface Order{
    _id:string,
    date:Date,
   


    
}

const Order:React.FC=()=>{




    const styleObj:React.CSSProperties={
        marginBottom:'20px'
    }
    const bottomContext:React.CSSProperties={
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    }
    const totalText:React.CSSProperties={
        color:'red',
        margin:'0'
    }

    return (
        <>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="customer">Select Customer</label>
                            <select id="customer" className='form-control'>
                                <option value="Use Options" disabled defaultValue='Use Options'>Use Options</option>
                                <option value="#">Customer 1</option>
                                <option value="#">Customer 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="name">Customer Name</label>
                            <input disabled type="text" className='form-control' id='name'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="address">Customer Address</label>
                            <input disabled type="text" className='form-control' id='address'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="salary">Customer Address</label>
                            <input disabled type="number" className='form-control' id='salary'/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="product">Select Product</label>
                            <select id="product" className='form-control'>
                                <option value="Use Options" disabled defaultValue='Use Options'>Use Options</option>
                                <option value="#">Customer 1</option>
                                <option value="#">Customer 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="description">Product Description</label>
                            <input type="text" disabled className='form-control' id='description'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="price">Unit Price</label>
                            <input type="number" disabled className='form-control' id='price'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qtyOnHand">QTY On Hand</label>
                            <input type="number" disabled className='form-control' id='qtyOnHand'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qty">QTY</label>
                            <input type="number" className='form-control' id='qty'/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <button className='btn btn-primary col-12'>+ Add Product</button>
                    </div>
                </div>

                <br/>
                <div className="row">
                    <div className="col-12">

                        <table className='table table-hover table-bordered'>
                            <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>QTY</th>
                                <th>Total</th>
                                <th>Delete Option</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>#1001</td>
                                <td>Product 1</td>
                                <td>240.00</td>
                                <td>20</td>
                                <td>25000.00</td>
                                <td>
                                    <button className='btn btn-outline-danger btn-sm'>Remove</button>
                                </td>
                            </tr>

                            </tbody>
                        </table>

                        <br/>

                        <div className="bottom-context" style={bottomContext}>
                            <div className="total-outer">
                                <h1 style={totalText}>
                                    Total : 2550.00 
                                </h1>
                            </div>
                            <div className="place-order-button-context">
                                <button className='btn btn-primary'>Place Order</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )

}
export default Order;