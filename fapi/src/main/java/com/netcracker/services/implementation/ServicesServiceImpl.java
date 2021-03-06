package com.netcracker.services.implementation;

import com.netcracker.models.Services;
import com.netcracker.property.BackendApiProperties;
import com.netcracker.services.interfaces.ServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class ServicesServiceImpl implements ServicesService {

  @Autowired
  private BackendApiProperties backendApiProperties;

  private final RestTemplate restTemplate;

  public ServicesServiceImpl(RestTemplateBuilder restTemplateBuilder) {

    this.restTemplate = restTemplateBuilder.build();
  }


  @Override
  public Services add(Services services) {
    return restTemplate.postForObject(backendApiProperties.getServicesUri(),services,Services.class);

  }

  @Override
  public void delete(int id) {

  }

  @Override
  public List<Services> findAll(int pageNo, int pageSize) {
    return Arrays.asList(restTemplate.getForObject(backendApiProperties.getServicesUri()
            +"/?pageSize="+pageSize+"&pageNo="+pageNo, Services[].class));
  }

  @Override
  public List<Services> findByCompanyId(int pageNo, int pageSize, int id) {
    return Arrays.asList(restTemplate.getForObject(backendApiProperties.getServicesUri()
            + "/find-by-companyId?pageNo=" + pageNo+ "&pageSize="+pageSize
            + "&id="+id, Services[].class));
  }


  @Override
  public Services findByName(String name) {
    return null;
  }

  @Override
  public Services findById(int id) {
    return null;
  }

  @Override
  public int getSize(){
    return restTemplate.getForObject(backendApiProperties.getServicesUri()+"/size", Integer.class);
  }

  @Override
  public int getSizeByCompanyId(int id) {
    return restTemplate.getForObject(backendApiProperties.getServicesUri()+"/size-by-companyId/"+id, Integer.class);
  }
}
