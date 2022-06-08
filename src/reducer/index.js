
export const Reducer=(state,action)=>{
  
     return {
       ...state,
       [action.name]:action.payload
     }
}

export const initialState={
  BillCycle:"",
  Cluster:"",
  Tower:"",
  Unit:"",
  renark:"",
};