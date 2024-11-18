package com.example.application.services;

import com.example.application.data.Person;
import com.example.application.data.PersonRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class PersonService extends
        CrudRepositoryService<Person, Long, PersonRepository> {
}
