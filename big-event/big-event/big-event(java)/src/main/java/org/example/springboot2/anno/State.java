package org.example.springboot2.anno;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import jakarta.validation.constraints.NotEmpty;
import org.example.springboot2.validation.StateValidation;

import java.lang.annotation.*;
import java.util.List;


@Documented //元注解
@Constraint(validatedBy = { StateValidation.class }) //指定提供校验规则的类
@Target({ ElementType.FIELD }) //元注解
@Retention(RetentionPolicy.RUNTIME) //元注解
public @interface State {
    //message提供校验失败后的提示信息
    String message() default "state参数的值只能是已发布或者草稿";
    //指定分组
    Class<?>[] groups() default {};
    //负载 获取到State注解的附加信息
    Class<? extends Payload>[] payload() default {};
}
