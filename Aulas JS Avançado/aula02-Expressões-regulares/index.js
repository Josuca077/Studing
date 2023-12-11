function FixPhoneNumber(phoneNumber) {
    const fixedNumber = phoneNumber.replace(/[\sA-Za-z-]/g, "")
    this.countryNumber = '+' + fixedNumber.match(/(?<=\+)\d+/)[0]
    this.numberDDD = fixedNumber.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedNumber.match(/(?<=\))\d+/)[0]
}

console.log(new FixPhoneNumber('dasdsa        +123  das (023) 9ads  das 123431dsfsdf-sdfd1234234'))
console.log(new FixPhoneNumber(' +456 (061) 9 12345-6789'))