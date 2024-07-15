public with sharing class wrapperComponenetController {

    @AuraEnabled(cacheable=true)
    public static List<AccountWrapper> getAccountWithContact(){
        List<AccountWrapper> wrapList = new List<AccountWrapper>();
        List<Account> accList = [Select Id,Name,(Select Id,Name from Contacts) from Account LIMIT 10];
        if(!accList.isEmpty()){
            for(Account acc : accList){
                wrapList.add(new AccountWrapper(acc, acc.Contacts)); 
            }
        }
        return wrapList;
    }

    public class AccountWrapper{
        @AuraEnabled public Account accRecord{get;set;}
        @AuraEnabled public List<Contact> contactList{get;set;}
        public AccountWrapper(Account accRecord, List<Contact> contactList){
            this.accRecord=accRecord;
            this.contactList=contactList;
        }
    }
}