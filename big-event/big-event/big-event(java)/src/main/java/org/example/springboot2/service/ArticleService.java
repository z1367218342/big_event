package org.example.springboot2.service;

import org.example.springboot2.pojo.Article;
import org.example.springboot2.pojo.PageBean;
import org.springframework.stereotype.Service;

@Service
public interface ArticleService {

    //新增文章
    void add(Article article);

    //条件分页列表查询
    PageBean<Article> list(Integer pageNum, Integer pageSize, Integer categoryId, String state);

    Article findById(final Integer id);

    void update(final Article article);

    void delete(Integer id);
}
