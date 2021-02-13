declare module numbertotextnamespace  {

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
   
    class Converter {
        convertToText(num:number , options :NumberToTextOptions) : string  
    }
    class NumberToText {
        convert(num : number , options : NumberToTextOptions) :string 
        addConverter(language: string , converter: Converter) : string 
    }
     
     
    
}

declare const _exports: typeof numbertotextnamespace.NumberToText;
export = _exports
 
 
 