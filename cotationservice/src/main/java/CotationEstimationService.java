import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CotationEstimationService {

    @GetMapping("/cotation/estimation")
    public String estimatation(){
        int min = 100000;
        int max = 1000000;
        double price =  Math.floor(Math.random()*(max-min+1)+min);
        return String.valueOf(price);
    }
}
