({
    fetchTripsByCaseIdHelper : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label: 'Trip Name', fieldName: 'TripName', type: 'text'},
            {label: 'Customer Name', fieldName: 'AccountName', type: 'text'},
                {label: 'Trip Id', fieldName: 'TripId', type: 'text'}
            ]);
        
        var action = component.get("c.getTripsByCaseId");
        action.setParams({ "caseId": component.get("v.caseId") }) ;
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                
                var rows = response.getReturnValue();     
                
            	for (var i = 0; i < rows.length; i++) { 
                	var row = rows[i]; 
                	
             	   if (row.Account__r) { 
                   		row.AccountName = row.Account__r.Name;  
                	} 
                    if (row.Account) { 
                   		row.AccountName = row.Account.Name;  
                	}
                    
                    if(row.Trip__r) {
                        row.TripId = row.Trip__r.TripId__c;
                        row.TripName = row.Trip__r.Name;
                    }
            }
                
                component.set("v.tripList", rows);
            }
        });
        $A.enqueueAction(action);
    }
})