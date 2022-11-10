import axios from "axios";

class PlanService{

    getAllPlans(){
        
        return axios.get("http://localhost:8080/claim/ClaimManagementSystem/getallplans");
    }
    savePlan(plan){
        return axios.post("http://localhost:8080/claim/ClaimManagementSystem/addplans",plan);
    }
    updatePlan(plan,Id){
        return axios.put("http://localhost:8080/claim/ClaimManagementSystem/updateplan/"+Id,plan);
    }
    getPlanById(planId){
        return axios.get("http://localhost:8080/claim/ClaimManagementSystem/getplan/"+planId);
    }

}

export default new PlanService();