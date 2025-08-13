function signNumber(type: "positive" | "negative" | "zero") {
    if (type === "positive") {
        return 1;
    } else if (type === "negative") {
        return -1;
    } else {
        return 0;
    }
}

signNumber("domo");

const domo = "domo";
type DomType = typeof domo;

const tyoya: DomType = "domo";