import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClaimService from "../service/ClaimService";


export class ListClaimComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            claims: []
        }
    }
    
    componentDidMount(){
        
        ClaimService.getAllClaims().then ((res) =>{
            console.log(res.data);
            this.setState({claims : res.data});
        })
    }

    // deleteMember(memberId){
    //     MemberService.deleteMember(memberId).then(res => {
    //         this.setState({members:this.state.members.filter(member =>member.memberId !== memberId)});
    //     })
    // }
   
    render(){
        return(
            <><h2 className="text-center">Claim List</h2>
            <div className="row">
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                List By Claim Type
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="getclaimdetailsbyclaimtype/half">Half</a>
                <a class="dropdown-item" href="getclaimdetailsbyclaimtype/full">Full</a>
            </div>
            </div>
                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Claim Id</th>
                            <th>Claim Date</th>
                            <th>Claim Total Amount</th>
                            <th>Amount To Claim</th>
                            <th>Claim Status</th>
                            <th>Bill details</th>
                            <th>Claim Documents</th>
                            <th>Claim Type</th>
                            <th>Remaining Amount</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.claims.map(
                                    Claim =>
                                    <tr key={Claim.claimId}>
                                        <td>{Claim.claimId}</td>
                                        <td>{Claim.claimDate}</td>
                                        <td>{Claim.claimTotalAmount}</td>
                                        <td>{Claim.amountToClaim}</td>
                                        <td>{Claim.claimStatus}</td>
                                        <td>{Claim.billDetails}</td>
                                        <td>{Claim.claimDocuments}</td>
                                        <td>{Claim.claimType}</td>
                                        <td>{Claim.remaining_amount}</td>
                                        <td><Link to={"/updateclaimdetails/" + Claim.claimId} className="btn btn-success">
                                            Open request
                                        </Link></td>
                                        {/* <td><button className="btn btn-danger" onClick={()=> this.deleteMember(Member.memberId)}>Delete</button></td> */}
                                    </tr>
                                )
                            }
                        </tbody>
                </table>
            </div></>      
            )
    }

}