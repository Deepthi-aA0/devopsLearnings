public class AccountUtility {
	public static void viewAnnualRevenue(){
        List<Account> accountsList = [Select Name,AnnualRevenue from Account];
        for(Account acc : accountsList){
            String acctRev = 'Name: ' + acc.Name + ', Annual Revenue: ' + acc.AnnualRevenue;
            system.debug(acctRev);
        }
    }
}