package webdev.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import webdev.repositories.LessonRepository;
import webdev.repositories.WidgetRepository;
import webdev.models.Course;
import webdev.models.Lesson;
import webdev.models.Module;
import webdev.models.User;
import webdev.models.Widget;

@RestController
public class WidgetService {
	@Autowired
	WidgetRepository widgetRepository;
	
	LessonRepository lessonRepository;
	
	@GetMapping("/api/widget")
	public List<Widget> findAllWidgets() {
		return (List<Widget>) widgetRepository.findAll();
	}
	
	@PostMapping("/api/lesson/{lessonId}/widget")
	public Widget createWidget(
			@PathVariable("lessonId") int lessonId,
			@RequestBody Widget newWidget) {
		Optional<Lesson> data = lessonRepository.findById(lessonId);
		
		if(data.isPresent()) {
			Lesson lesson = data.get();
			newWidget.setLesson(lesson);
			return widgetRepository.save(newWidget);
		}
		return null;		
	}
	
	@DeleteMapping("/api/widget/{widgetId}")
	public void deleteWidget(@PathVariable("widgetId") int widgetId)
	{
		widgetRepository.deleteById(widgetId);
	}
	
	@PutMapping("/api/widget/{widgetId}")
	public Widget updateWidget(@PathVariable("widgetId") int widgetId, @RequestBody Widget newWidget) {
		Optional<Widget> data = widgetRepository.findById(widgetId);
		if(data.isPresent()) {
			Widget widget = data.get();
			widget.setName(newWidget.getName());
			widget.setSequence(newWidget.getSequence());
			widget.setText(newWidget.getText());
			widget.setClassName(newWidget.getClassName());
			widget.setStyle(newWidget.getStyle());
			widget.setWidth(newWidget.getWidth());
			widget.setHeight(newWidget.getHeight());
			widget.setSize(newWidget.getSize());
			widget.setHref(newWidget.getHref());
			widget.setSrc(newWidget.getSrc());
			widget.setListItems(newWidget.getListItems());
			widget.setListType(newWidget.getListType());
			widgetRepository.save(widget);
			return widget;
		}
		return null;
	}
	
	@GetMapping("/api/widget/{widgetId}")
	public Widget findWidgetById(@PathVariable("widgetId") int widgetId) {
		Optional<Widget> data = widgetRepository.findById(widgetId);
		if(data.isPresent()) {
			return data.get();
		}
		return null;
	}
	
	@GetMapping("/api/lesson/{lessonId}/widget")
	public List<Widget> findAllWidgetsForLesson(
			@PathVariable("lessonId") int lessonId) {
		Optional<Lesson> data = lessonRepository.findById(lessonId);
		if(data.isPresent()) {
			Lesson lesson = data.get();
			return lesson.getWidgets();
		}
		return null;		
	}
}