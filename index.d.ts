declare module "number-to-text" {

    /***
     * 
    num - a string or number.
    options
        language - Default: en-us - possible Values : en-us, 'en-in', 'de', 'tr'
        separator - Default: , for (en-us and en-in)
        case - Default: titleCase - possible Values : "titleCase" , "lowerCase" , "upperCase" for (en-us and en-in)

     */

    interface  NumberToTextOptions  {
        language?: string , 
        separator? : string , 
        case? : string  
    } 
    function convert(num : number , options : NumberToTextOptions)
    class Converter {
        convertToText(num:number , options :NumberToTextOptions)
    }

    function addConverter(language: string , converter: Converter)
}