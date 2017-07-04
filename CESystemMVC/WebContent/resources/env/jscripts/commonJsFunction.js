/**
 * <p>Title: Terminus Billing System</p>
 *
 * <p>Copyright: Copyright (c) 2006</p>
 *
 * <p>Company: Comcerto (pvt) Ltd.</p>
 *
 * @author Daud
 *
 * @version 1.0
 **/

function isValuePresent(value , valueName){

  if(value==null){value='';}

  value=removeSpacesFrontBack(value);

  if(value.length <=  0 ){
        alert(valueName+' is Required ');
        return false;
  }
  else{
       return true;
  }


}


////////////////////////////////////////////
function isOneValuePresent(value1, value2, valueName1, valueName2){

  if(value1==null){value1='';}
  if(value2==null){value2='';}


  value1=removeSpacesFrontBack(value1);
  value2=removeSpacesFrontBack(value2);

  if(value1.length <=  0 && value2.length <=  0){
        alert(valueName1+' or '+valueName2+' is Required ');
        return false;
  }
  else{
       return true;
  }


}



//////////////////////////////////////////////Remove Spaces from Whole of the String
function removeSpaces(string) {
	var tstring = "";
	string = '' + string;
	splitstring = string.split(" ");
	for(i = 0; i < splitstring.length; i++)
	tstring += splitstring[i];
	return tstring;
}


//////////////////////////////////////////////Remove Spaces from Front and Back of the String
function removeSpacesFrontBack(string) {

	var tstring=string;
	for(i=0;i<string.length;i++){
		if(string.charAt(i)==' '){
			tstring=string.substring(i+1);
		}
		else{
			break;
		}
	}

	var tstring2=tstring;
	for(i=tstring.length-1;i>=0;i--){
		if(tstring.charAt(i)==' '){

			tstring2=tstring.substring(0,i);
		}
		else{
			break;
		}

	}
	return tstring2;

}


//////////////////////////////////////////////Check for invalid character ' <>?#
function invalidCharacterCheck(string) {

        var invalidCharacters='\'<>?';

	for(i=0;i<string.length;i++){
            for(j=0;j<invalidCharacters.length;j++){

                if(string.charAt(i) == invalidCharacters.charAt(j)){
                  alert('Characters \' < > ?  are not allowed ');
                  return false;
                }

            }
	}

        return true;

}

//////////////////////////////////////////////Check If Name is valid ONLY ALPHABETS and spaces
function isValidName(string,name) {

        var validCharacters='abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	for(i=0;i<string.length;i++){
            for(j=0;j<validCharacters.length;j++){

                  if(validCharacters.match(string.charAt(i))== null){
                        alert('Illegal '+ name);
                        return false
                }
            }
	}

        return true;

}

//////////////////////////////////////////////Check If Name is valid ONLY ALPHABETS and spaces
function isValidNumber(string,numberName) {

        var validCharacters='1234567890';

	for(i=0;i<string.length;i++){
            for(j=0;j<validCharacters.length;j++){

                  if(validCharacters.match(string.charAt(i))== null){
                        alert('Illegal '+numberName);
                        return false
                }
            }
	}

        return true;

}


//////////////////////////////////////////////Length Check
function lengthCheck(string,valueName,minLength,maxLength) {

   if(string.length < minLength || string.length >maxLength){
          if(minLength!=maxLength){
              alert(valueName+' length should be greater or equal to '+minLength+' and smaller or equal to '+maxLength);
          }
          else{
              alert(valueName+' length should be equal to '+minLength);
          }

          return false;
        }

        return true;
}
