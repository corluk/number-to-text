declare module "number-to-text" {



    interface NumberToTextOptions {
        language?: string,
        separator?: string,
        case?: string
    }

    class Converter {
        convertToText(num: number, options: NumberToTextOptions): string
    }
    class NumberToText {
        convert(num: number, options: NumberToTextOptions): string
        addConverter(language: string, converter: Converter): string
    }


}




