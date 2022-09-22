let Model=[
    {
        hedding:'Double_angle Brace Communication',
        date:'20 September, 2022'
    },{
        hedding:'Single_angle Brace 2',
        date:'14 June, 2022'
    }
]

let getModelData=()=>{
    return Model;
}

let SetModelData=(model)=>{
    Model.push(model)
}

export {getModelData,SetModelData}