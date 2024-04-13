import { ChangeEvent, useState } from "react";
import { storage } from "../config/firebase";
import axios from "axios";


interface Product{

    name:string,
    description:string,
    image:string,
    unitPrice:number,
    qtyOnHand:number


}



const Product:React.FC=()=>{


    const [products,setProducts]=useState<Product[]>([]);

    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [image,setimage]=useState<File | null>(null);
    const [unitPrice,setunitPrice]=useState<number|''>('');
    const [qtyOnHand,setqtyOnHand]=useState<number|''>('');


    const handleImage=(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files[0]){
            setimage(e.target.files[0]);
        }
    }


    const saveProduct=async ()=>{

        const imageUrl='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FGetBest-Electric-Rechargeable-Accelerator-Training%2Fdp%2FB07PZ8FWKR&psig=AOvVaw0dqSb5E6jkgkRL6fwhzodk&ust=1704858067577000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLiez5uxz4MDFQAAAAAdAAAAABAE';

        try{
            const response=await axios.post('http://localhost:3000/api/v1/customers/create',{
               name,description,unitPrice,qtyOnHand,image:imageUrl
            });
            
            console.log(response);
            setName('');
            setDescription('');
            setqtyOnHand('');
            setunitPrice('');
            findAllProducts();
            
            
       }catch(e){
           console.log(e);
       }


        // if(image){
        //     const storageRef=storage.ref(`images/${Math.random()+'-'+image.name}`);
        //     storageRef.put(image).then(()=>{
        //         storageRef.getDownloadURL().then((url)=>{
        //             console.log(url);
        //         });
        //     })
        // }
    }

    const findAllProducts= async ()=>{

        const response= await axios.get('http://localhost:3000/api/v1/products/findAll?searchText=&page=1&size=10');
        setProducts(response.data);
       
    }




    const styleObj:React.CSSProperties={
        
    }

    return (
        <>
        
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" onChange={(e)=>{
                            setName(e.target.value);
                        }} className="form-control" id="productName" />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4" style={styleObj}>

                         <label htmlFor="price">Unit Price </label>
                        <input type="number" onChange={(e)=>{
                            setunitPrice(parseFloat(e.target.value));
                        }} className="form-control" id="price" />
                </div>
                <div className="col-12 col-sm-6 col-md-4" style={styleObj}>

                        <label htmlFor="qty">QTY on Hand</label>
                        <input type="number" onChange={(e)=>{
                            setqtyOnHand(parseFloat(e.target.value));
                        }} className="form-control" id="qty" />
                </div>

                <div className="col-12 col-sm-6 col-md-4" style={styleObj}>

                        <div className="form-group">
                            <label htmlFor="image" >Product Image</label>
                            <input type="file" onChange={handleImage} className="form-control" id="image" />
                        </div>
                
                </div>
            
                <div className="col-12" style={styleObj}>
                            <label htmlFor="desc">Description</label>
                            <textarea rows={2} onChange={(e)=>{
                                setDescription(e.target.value);
                            }} className="form-control" id="desc" />
                </div>

                

            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-success col-12">Save Product</button>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-12">
                    <div className="col-12">
                        <input type="search" className="form-control" placeholder="Search Product Here"/>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover table-bordered">
                    
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Product Name</th>
                                <th>Qty On Hand</th>
                                <th>Unit Price</th>
                                <th>Delete Option</th>
                                <th>Update Option</th>
                                <th>See More</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>#10029</td>
                                    <td>nike </td>
                                    <td>34</td>
                                    <td>25000</td>
                                    <td>
                                        <button className="btn btn-outline-danger btn-sm">Delete</button>
                                    
                                    </td>
                                    <td>
                                    <button className="btn btn-outline-success btn-sm">Update</button>
                                    </td>
                                    <td>
                                    <button className="btn btn-outline-pimary btn-sm">View</button>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Product;