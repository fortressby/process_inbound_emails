# process_inbound_emails


database_diagram_1.png - datamodel diagram

EmailCase.apxc - inboud email service to process incoming emails

ProcessOpenCasesBatch.apxc - batch to process open cases to fix Account mapping by Trip Id

TripsByCase.cmp - webcomponent to display table ot case related trips

TripsByCaseController.js - component clientside controller

TripsByCaseHelper.js - component helper

TripController.apxc - server side component controller

command to run scheduled job every nigth

ProcessOpenCasesScheduleJob p = new ProcessOpenCasesScheduleJob();
        String sch = '0 0 22 * * ?';
        system.schedule('Process Open Cases', sch, p);
