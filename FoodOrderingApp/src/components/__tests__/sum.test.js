import { sum } from "../sum";
test("Sum function should calculate sum of 2 numbers",()=>{
     const res=sum(3,4)
     //assertion
     expect(res).toBe(7)
})