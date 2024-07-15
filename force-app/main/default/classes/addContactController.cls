public with sharing class addContactController {

    @AuraEnabled(cacheable=true)

    @AuraEnabled
    public static String createContacts(List<ContactDetail> contactdetail) {
        List<Contact> contactList = new List<Contact>();
        try{
            for(ContactDetail cd : contactdetail){
                Contact contact = new Contact();
                contact.AccountId = cd.accId;
                contact.LastName = cd.lastName;
                contact.Email = cd.email;
                contact.Phone = cd.phone;
                contactList.add(contact);
            }
            if(contactList.size()>0){
                insert contactList;
            }
            
            return 'Contacts created successfully';
        } catch (Exception e) {
            return 'Error: ' + e.getMessage(); // Return error message
        }
    }


    public class ContactDetail {
        @AuraEnabled public String accId{get;set;}
        @AuraEnabled public String lastName{get;set;}
        @AuraEnabled public String email{get;set;}
        @AuraEnabled public String phone{get;set;}
        @AuraEnabled public String contactId{get;set;}
    }


}