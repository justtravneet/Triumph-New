import { atom } from "recoil"

export const billAtom = atom({
    key: "singleEvent",
    default: {
        subTotal : 0,
        gst:0,
        deliveryFee:0,
        discount:0,
        total:0
    }
})

export const selectedAddressAtom = atom({
    key: "selectedAddressAtom",
    default: ""
})

export const phoneNumberAtom = atom({
    key: "phoneNumberAtom",
    default: ""
})