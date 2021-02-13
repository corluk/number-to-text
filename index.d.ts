declare module numbertotext {



    interface NumberToTextOptions {
        language?: string,
        separator?: string,
        case?: string
    }

    class Converter {
        convertToText(num: number, options: NumberToTextOptions): string
    }
    class NumberToText {
        convertToText(num: number, options: NumberToTextOptions): string
        addConverter(language: string, converter: Converter): string
    }


}

export default numbertotext.NumberToText




