const express = require('express')
const app = express()

var AWS = require('aws-sdk');
AWS.config.region = "us-east-1";
var qldb = new AWS.QLDB;
app.get('/lcs', function (req, res) {
//var ledger_name1="TelecomLedger";
var params = {
  MaxResults: "10",
  NextToken: null
};
qldb.listLedgers(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else {
    //console.log(data);


    //var u=JSON.stringify(data);
    //console.log(data.Ledgers[1]);

    //var ledgerdata=data;
    //console.log(params);
    //var strdata=JSON.stringify(ledgerdata)
    //console.log(strdata.);
    //console.log(Ledgers[0].name);
    //console.log("list of ledgers"+data);



    //console.log(data.key);
    //console.log(data.key[0].Name);
    //console.log(data.length);
    var ledger_name1 = 'newTelecomLedger';
    for (var i = 0; i < data.Ledgers.length; i++) {
      if (data.Ledgers[i].Name === ledger_name1) {
        var ledger_name = data.Ledgers[i].Name;
        //console.log(""+ledger_name1+"found");
            // console.log("founded : "+data.Ledgers[i].Name);
      }
      //console.log(ledger_name);

    }
    //console.log(ledger_name);
    /*
    
    
    //var query = "SELECT * FROM _ql_committed_Network_Devices";
    var params2 = {
        Name: ledger_name /* required */
    // };




    /*
      var Telecomledgerblockaddress;
        var temp = qldb.getDigest(params2, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else    // console.log(JSON.stringify(data));     // successful response
    
        //log(data.DigestTipAddress.IonText);
        Telecomledgerblockaddress=data.DigestTipAddress.IonText;
    
        console.log("inside"+Telecomledgerblockaddress);
        return JSON.parse(Telecomledgerblockaddress);
      });
    
    
    */

    //console.log("outside"+temp);
    //console.log(JSON.stringify(temp));

    //var ba=qldb.getDigest();
    // console.log(qldb.getDigest.text_1);

    //console.log(Telecomledgerblockaddress);

    //console.log(data);
    //console.log(data.getDigest);


    /*
    
    var Telecomledgerblockaddress='';
    
    qldb.getDigest(params2, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else    console.log("this is a result of dijest tip address"+JSON.stringify(data.BlockAddress.IonText));     // successful response
    
    //log(data.DigestTipAddress.IonText);
    Telecomledgerblockaddress=data.DigestTipAddress.IonText;
    console.log("inside"+Telecomledgerblockaddress);
    */
    var params3 = {
      BlockAddress: { /* required */
        IonText: '{strandId:"GE2kx764q9YINAv4ObaSYU",sequenceNo:8}'
      },
      Name: ledger_name
    };
    qldb.getBlock(params3, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else {
        //var s=data.toString();
        //var st= JSON.parse(s);
         console.log("I am here")
        //console.log(data.Block.IonText);
        var iontojson = require("ion-to-json");
        var ion = require("ion-js");
        var unformatted = ion.makeReader(data.Block.IonText);
        json = iontojson.ionToJSON(unformatted);
        //console.log("===============json===============================");        
        //console.log(json);
        //var strjsn=JSON.stringify(json)

      let dummyArr = []
       for(var i=0;i<json.revisions.length;i++)
       {
         //let count="";
        //count=count+json.revisions[i].data;
        dummyArr.push(json.revisions[i].data)
       }

        res.send(JSON.stringify(dummyArr)); 




       //res.send(json.revisions[i].data);          

       //res.send(count);
       
        
       // console.log(json.revisions[0].data);
        // var ionData = JSON.stringify(data);
        // var ionReader = ionJs.makeReader(ionData);
        // ionReader.next();
        // ionReader.stepIn();
        // ionReader.next();
        // var hello = ionReader.fieldName();
        // var ion = ionReader.stringValue();
        // ionReader.stepOut();
        // console.log(ion.concat(", ").concat(hello));
        // console.log(String.fromCharCode.apply(null, writer.getBytes()));



/*
        var jsonformat = String.fromCharCode.apply(null, writer.getBytes());
        console.log("===================jsonformat=======================================");
        console.log(jsonformat);

*/


        
        //var uip=data.Block.IonText
        //console.log(JSON.stringify(uip));
        //var t=uip.toString();
        //console.log(t);

      }

      //    res.send(data);
      // successful response
    });

    //return JSON.parse(Telecomledgerblockaddress);




    //console.log("outside"+Telecomledgerblockaddress);
    //console.log(Telecomledgerblockaddress);
    //var d=JSON.parse(data);
    //console.log(d);
    /*
    
    //=================================(method 2)
    var t=qldb.getDigest(params2, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else    // console.log(JSON.stringify(data));     // successful response
        
        //log(data.DigestTipAddress.IonText);
        return data.DigestTipAddress.IonText;
        
        //console.log("inside"+Telecomledgerblockaddress);
        //return JSON.parse(Telecomledgerblockaddress);
        });
    
    var ba=qldb.getDigest(ledger_name);
    console.log(t);
    */
















    /*
    
    function createQldbDriver(
        ledgerName = ledger_name1, 
        serviceConfigurationOptions= ClientConfiguration = {}
    ): QldbDriver {
        const qldbDriver: QldbDriver = new PooledQldbDriver(ledgerName, serviceConfigurationOptions);
        return qldbDriver;
    }
    
    
    
    
    //for(var key in data)
    //{
      //  console.log(key);
        //console.log("inside for");
        //console.log(ledgers.key);
        //     if(Object.keys(data.Ledgers)==="TelecomLedger")
        //     {  
        //         console.log("ledger.key",ledgers.key);
        //         console.log("inside if");
        //         console.log("telecomledger is present");
        //     }
        //     else{
        //         console.log("inside else    ");
        //         console.log("TelecomLedger is not present ");
        //     }
    //}
    //console.log("enter ur ledger name");
    
    /*
    
    var ledgername=TelecomLedger;
    for(var d: data)
    {
    if(d===ledgername)
    {   
        return console.log("ledger is present");
    }
    else {console.log("your ledger is not present");}
        }
    */




    //console.log(name);



    /*  function json2array(data)
      {
          var result = [];
          var keys = Object.keys(data);
          keys.forEach(function(key){
          result.push(data[key]);
          });
          return result;
      }
      json2array(result);*/
    //console.log(data);  // successful response   
    //var e=data.toString();
    //var a= JSON.parse(e);
    //    console.log(a);



    // const arr=Object.keys(data).map((key) => [key,data[key]]);
    //console.log(arr);
  }
});
})

//})

app.listen(8081)
/*var str=JSON.stringify(data);
console.log(str);
var s=str.toString();
console.log(s);*/
 // var result =AWS.Response();
  //console.log(result);
